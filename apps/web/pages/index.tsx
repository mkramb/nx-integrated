import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const StyledPage = styled.div`
  .response {
    background: lightgray;
    padding: 10px;
  }
`;

export function Index() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data?.message);
      });
  }, []);

  return (
    <StyledPage>
      <div>
        <h1> Hello there 👋, </h1>
        <span>
          from server: <pre className="response">{message}</pre>
        </span>
      </div>
    </StyledPage>
  );
}

export default Index;
