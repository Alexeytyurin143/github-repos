import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Repository from '../Repository/Repository'
import { useGetReposQuery } from '../../actions/repos'

const Main = () => {
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetReposQuery()

    return (
        <div>
            <div>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        {data.items.map((repository) => (
                            <Repository repository={repository} key={repository.id} />
                        ))}
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default Main
