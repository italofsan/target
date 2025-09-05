import { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

import { TransactionTypes } from '@/utils/TransactionTypes'

import { TransactionType } from '@/components/TransactionTypes'
import { CurrencyInput } from '@/components/CurrencyInput'
import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>()
  const [type, setType] = useState(TransactionTypes.Input)

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title='Nova transação'
        subtitle='A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar.'
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />
        <CurrencyInput label='Valor (R$)' value={0} />
        <Input
          label='Motivo'
          placeholder='Ex: Investir em CDB de 110% no banco XPTO'
        />
        <Button title='Salvar' />
      </View>
    </View>
  )
}
