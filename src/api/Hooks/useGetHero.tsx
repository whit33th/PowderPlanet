import { useQuery } from '@tanstack/react-query'
import { services } from '../Services/Services'

export default function useGetHero (name: string) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['hero'],
    queryFn: () => services.getChampion(name),
    select: data => data.data.data[name],
    enabled: !!name
  })
  return {data, isLoading,isError, isSuccess}
}
