
import { Issues } from "./components/Issues";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

export interface InterfaceIssues {
  title : string,
  created_at : string,
  body : string,
  id : number,
  number:number
}

export function Home() {

    type ResponseIssues ={
      items: InterfaceIssues[]
    }
    
   
    const [user, setUser] = useState<ResponseIssues | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchGitHubUser() {
        try {
          const response = await axios.get("https://api.github.com/search/issues?q=repo:lucaspedronet/BlogProfileGitHub");
          setUser(response.data);
        } catch (error) {
          console.error("Erro ao buscar usuário do GitHub", error);
        } finally {
          setLoading(false);
        }
      }
      fetchGitHubUser();
    }, []);
  
  
  return (
    <HomeContainer>
      <Summary />      
      <IssuesAside>
      {user?.items.map(user => (
        <Issues
        title={user.title}
        created_at = {user.created_at}
        body = {user.body}
        id = {user.id}
        number= {user.number}
        >
        </Issues>

        ))}
      </IssuesAside>
        
 

    </HomeContainer>
  );
}
