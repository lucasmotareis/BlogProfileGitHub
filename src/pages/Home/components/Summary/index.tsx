import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";
import { useEffect, useState } from "react";
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import axios from "axios";

export function Summary() {


  type GitUser ={
    "name": string,
    "html_url": string,
    "avatar_url": string,
    "bio": string,
    "login": string,
    "company": string,
    "followers": number
  }
  
  // "https://api.github.com/users", "/lucaspedronet"
  // "https://api.github.com/search"
  // "https://api.github.com/repos/lucaspedronet/TudoLista/issues"
  const [user, setUser] = useState<GitUser | null>(null);
  useEffect(()=>{
    axios({
      method: "get",
      url: "https://api.github.com/users/lucasmotareis"
      }).then((response) =>{
      setUser(response.data);
    });
  },[]);

  return (
    <SummaryContainer>
      <img src={user?.avatar_url} />
      <section>
        <SummaryHeader>
          <h1>{user?.name}</h1>
          <a href={user?.html_url} target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{user?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{user?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{user?.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{user?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
