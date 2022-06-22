function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Persona amata</Text>}>
        <TextInput
          label="Nome: "
          title="Nome"
          settingsKey="nome"
          type="text" 
        />
        <TextInput
          label="Giorno di conoscenza (aaa-mm-gg): "
          title="Giorno"
          settingsKey="day"
          type="text" 
        />
      {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
      {<Text bold align="center">Dedicato a Francesca Milano</Text>}
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
