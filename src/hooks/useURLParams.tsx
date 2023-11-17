import { useCallback } from 'react'

type QueryParamTypes = { [key: string]: string | Date }

const useURLParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)

  const getParams = useCallback(
    (params: string[], dateParams: string[] = []) => {
      const queryParams: QueryParamTypes = {}

      params.forEach(param => {
        const value = urlSearchParams.get(param)
        if (value) {
          const parsedValue = dateParams.includes(param) ? new Date(value.slice(0, -1)) : value
          queryParams[param] = parsedValue
        }
      })

      return queryParams
    },
    [JSON.stringify(urlSearchParams)]
  )

  return { getParams }
}

export default useURLParams
