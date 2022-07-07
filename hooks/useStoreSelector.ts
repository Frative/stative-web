import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../stores'

const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

export default useStoreSelector