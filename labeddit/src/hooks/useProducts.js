import axios from 'axios';
import { useEffect, useState } from 'react';

export const useProducts = () => {
    const [listaPosts, setListaPosts] = useState([])
    let aux = true

    useEffect(() => {
        console.log("deu ruim")
        pegaPosts();
    }, [aux]);

    const pegaPosts = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.token}`
                    }
                }
            )
            .then(response => {
                setListaPosts(response.data.posts)
                aux = listaPosts
            })
            .catch(error => {
                alert(error)
            })
            
    }

    return listaPosts
}
