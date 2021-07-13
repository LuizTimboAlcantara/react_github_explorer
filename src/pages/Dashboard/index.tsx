import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore respositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/60242867?s=400&u=65ef7eb344624f570e047c0d55bd8ffe32b85f7f&v=4" alt="Luiz Timbó" />

          <div>
            <strong>fsdlçkfsldkflçs</strong>
            <p>asdsakjdlaskdksalçdkaçsl</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/60242867?s=400&u=65ef7eb344624f570e047c0d55bd8ffe32b85f7f&v=4" alt="Luiz Timbó" />

          <div>
            <strong>fsdlçkfsldkflçs</strong>
            <p>asdsakjdlaskdksalçdkaçsl</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/60242867?s=400&u=65ef7eb344624f570e047c0d55bd8ffe32b85f7f&v=4" alt="Luiz Timbó" />

          <div>
            <strong>fsdlçkfsldkflçs</strong>
            <p>asdsakjdlaskdksalçdkaçsl</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
