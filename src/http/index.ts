import { METHOD } from '../lib/constants'

export const fetchRequest = (url: string) => {
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      throw new Error('Required')
    })
}

export async function postRequest<T>(params: { url: string; options: {} }, { arg }: { arg: T }) {
  const { url } = params

  const requestOptions: RequestInit = {
    method: METHOD.POST,
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetch(url, requestOptions)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      throw new Error('Failed')
    })
}

type MutateRequestArgs<T> = {
  requestBody: T
  queryParams: {
    id: string
  }
}

export async function mutateRequest<T>(
  params: { url: string; options: { method: METHOD } },
  { arg }: { arg: MutateRequestArgs<T> }
) {
  const {
    url,
    options: { method },
  } = params

  const requestOptions: RequestInit = {
    method,
    body: JSON.stringify(arg.requestBody),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const URL = url + '?' + new URLSearchParams(arg.queryParams)
  return fetch(URL, requestOptions)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      throw new Error('Failed')
    })
}

export const deleteRequest = (url: string) => {
  const requestOptions: RequestInit = {
    method: METHOD.DELETE,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return fetch(url, requestOptions)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      throw new Error('Required')
    })
}
