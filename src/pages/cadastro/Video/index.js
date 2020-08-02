import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Teste',
    url: 'https://youtu.be/3Ec6aZjaZfI',
    categoria: 'Disney',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrado com sucesso!');

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 2,
        })
          .then(() => {
            console.log('Cadastro efetuado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Estúdio de Animação"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Estúdio de Animação
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
