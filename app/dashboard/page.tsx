'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Select } from '../../components/ui/select'
import ProtectedRoute from '../../components/protected-route'

export default function DashboardPage() {
  const { data: session } = useSession()
  const [dbConfig, setDbConfig] = useState({
    username: '',
    password: '',
    dialect: 'mongodb',
  })

  const handleConfigSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this configuration to your backend
    console.log('Database configuration:', dbConfig)
    // For now, we'll just log it
  }

  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}</h1>
          {/* @ts-ignore  */}
        <p className="mb-4">Your current plan: {session?.user?.plan || 'No plan selected'}</p>
        
        <h2 className="text-xl font-semibold mb-2">Configure AI Model Data Source</h2>
        <form onSubmit={handleConfigSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Database Username"
            value={dbConfig.username}
            onChange={(e) => setDbConfig({ ...dbConfig, username: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Database Password"
            value={dbConfig.password}
            onChange={(e) => setDbConfig({ ...dbConfig, password: e.target.value })}
          />
          <Select
            value={dbConfig.dialect}
            onValueChange={(value) => setDbConfig({ ...dbConfig, dialect: value })}
          >
            {/* @ts-ignore  */}
            <Select.Option value="mongodb">MongoDB</Select.Option>
              {/* @ts-ignore  */}
            <Select.Option value="postgresql">PostgreSQL</Select.Option>
              {/* @ts-ignore  */}
            <Select.Option value="mysql">MySQL</Select.Option>
          </Select>
          <Button type="submit">Save Configuration</Button>
        </form>
      </div>
    </ProtectedRoute>
  )
}