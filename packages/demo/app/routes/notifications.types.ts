type Transaction = {
  id: number
  amount: number
  unit: string
  from: string
  to: string
}

type Account = {
  id: number
  name: string
  currency: string
}

export type Notification = {
  id: string
  type: string
  data: Transaction | Account
}
