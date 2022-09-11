import { atom, useAtom } from 'jotai';

const searchInputTextAtom = atom<string>('');

const useSearch = () => {
    // React Query 코드 작성
    const [searchInputText, setSearchInputText] = useAtom(searchInputTextAtom);

    const handleChangeSearchText = (text: string) => {
        setSearchInputText(text);
    }

    const handlePressSearch = () => {
        // React Query fetch 액션 작성
    }

    return {
        searchInputText,
        handleChangeSearchText,
        handlePressSearch
    }
}

export default useSearch;