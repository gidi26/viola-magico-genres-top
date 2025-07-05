import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  isAdmin: boolean
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  createUser: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Get initial session
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
        await checkAdminStatus(session?.user ?? null)
      } catch (error) {
        console.error('Auth initialization error:', error)
        setUser(null)
        setIsAdmin(false)
      } finally {
        setLoading(false)
      }
    }

    initAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null)
      await checkAdminStatus(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkAdminStatus = async (currentUser: User | null) => {
    if (!currentUser) {
      setIsAdmin(false)
      return
    }

    try {
      // Check if user is admin in our users table
      const { data: userData, error } = await supabase
        .from('users')
        .select('role')
        .eq('auth_user_id', currentUser.id)
        .single()

      if (error) {
        console.error('Error checking admin status:', error)
        setIsAdmin(false)
        return
      }

      setIsAdmin(userData?.role === 'admin')
    } catch (error) {
      console.error('Error checking admin status:', error)
      setIsAdmin(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const createUser = async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })
    
    if (error) throw error

    // Create user record in our users table
    if (data.user) {
      const { error: dbError } = await supabase
        .from('users')
        .insert([
          {
            auth_user_id: data.user.id,
            name,
            email,
            role: 'user', // default role
          }
        ])
      
      if (dbError) throw dbError
    }
  }

  const value = {
    user,
    isAdmin,
    loading,
    signIn,
    signOut,
    createUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}