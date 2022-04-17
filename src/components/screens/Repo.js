import React from 'react'
import '../../App.css'

const Repo = ({repos, loading}) => {

    if(loading){
        return <h2>loading...</h2>
    }

    return (
        <>
            <body>
            <header>
                <h1>Github : Repo Viewer</h1>
            </header>
            <main>
                <div></div>
                <div class="repo">
                {
                    repos.map(repo =>(
                        <a href={repo.html_url} className='repo_link' >
                            <a href={repo.html_url}>{repo.full_name}</a>
                            <div class="description">{repo.description}</div>
                            <div>   
                                <span>Owner : <a href={repo.owner.html_url}>{repo.name}</a></span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-icons star">star_outline</span>&nbsp;{repo.stargazers_count}</span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;{repo.forks} forks</span>
                            </div>
                            <div>Language : {repo.language}</div>
                            <hr className='gap' />
                        </a>
                    ))
                }
                </div>
                
                <div></div>
            </main>
            <footer></footer>
            </body>

        </>
    )

}

export default Repo