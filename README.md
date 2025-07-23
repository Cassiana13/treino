useEffect(() => {
    carregarTreinos();
  }, []);

  async function carregarTreinos() {
    const lista = await buscarTreinos();
    setTreinos(lista);
  }

  async function handleAdicionarTreino(novoTreino) {
    const treinoAdicionado = await adicionarTreino(novoTreino);
    setTreinos([...treinos, treinoAdicionado]);
  }

  async function handleEditarTreino(id, dadosAtualizados) {
    await editarTreino(id, dadosAtualizados);
    carregarTreinos(); // Atualiza lista depois de editar
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meus Treinos</h1>
      <TreinoForm onAdicionar={handleAdicionarTreino} />
      <div style={{ marginTop: "20px" }}>
        {treinos.map((treino) => (
          <TreinoItem
            key={treino.id}
            treino={treino}
            onEditar={handleEditarTreino}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
