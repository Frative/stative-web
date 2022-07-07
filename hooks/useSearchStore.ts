import useStoreSelector from "./useStoreSelector";

function useSearchStore() {
    return useStoreSelector((state) => state.search)
}

export default useSearchStore