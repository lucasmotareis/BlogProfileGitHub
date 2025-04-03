import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";
import { InterfaceIssues } from "../../index.tsx";




export function Issues({title,created_at,body,id,number} : InterfaceIssues) {

  return (
    <IssuesContainer>
      <StyledNavLink to={`/post/${id}`}>
        <div>
          <h2> {title}</h2>
          <span> {number}</span>
        </div>
       
       <span>{dateFormatter.format(new Date(created_at))}</span>
       <p>{body?.length > 200 ? `${body?.slice(0, 200)}...` : body}</p>

      </StyledNavLink>
    </IssuesContainer>
  );
}
