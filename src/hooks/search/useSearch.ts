import axios from 'axios';
import { atom, useAtom } from 'jotai';
import useSWR from 'swr';

const searchInputTextAtom = atom<string>('');
const searchedInputTextAtom = atom<string>('');

const useSearch = () => {
    // React Query 코드 작성
    const [searchInputText, setSearchInputText] = useAtom(searchInputTextAtom);
    const [searchedInputText, setSearchedInputText] = useAtom(searchedInputTextAtom);
    
    const { data: repositoriesData, isValidating: isFetchingRepositoriesData } = useSWR(`https://api.github.com/search/repositories?q=${searchedInputText}`, async () => {
        const { data } = await axios.get('https://api.github.com/search/repositories', {
            params: {
                q: searchedInputText
            }
        });
        return data;
    }, {
        revalidateOnMount: false
    });

    const handleChangeSearchText = (text: string) => {
        setSearchInputText(text);
    }

    const handlePressSearch = () => {
        setSearchedInputText(searchInputText);
    }

    return {
        repositoriesData, 
        searchInputText,
        isFetchingRepositoriesData,
        handleChangeSearchText,
        handlePressSearch
    }
}

export default useSearch;