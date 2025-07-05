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
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      checkAdminStatus(session?.user ?? null)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      checkAdminStatus(session?.user ?? null)
      setLoading(false)
    })

    setLoading(false)

    return () => subscription.unsubscribe()
  }, [])

  const checkAdminStatus = async (currentUser: User | null) => {
    if (!currentUser) {
      setIsAdmin(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .select('email')
        .eq('id', currentUser.id)
        .single()

      if (!error && data) {
        // Define admin email here - replace with your actual admin email
        const adminEmails = ['admin@example.com'] // Add your admin email here
        setIsAdmin(adminEmails.includes(data.email))
      }
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
            id: data.user.id,
            name,
            email,
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