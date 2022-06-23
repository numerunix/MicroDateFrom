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
       <Button list label="Elimina impostazioni" onClick={() => props.settingsStorage.clear()} />
      {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
      {<Text bold align="center">Dedicato a Francesca Milano</Text>}
      {<Text bold align="center">Questo programma è sotto licenza GPL v3 o, secondo la tua opinione, qualsiasi versione successiva</text>}
      {<Text bold align="center">https://www.github.com/numerunix/MicroDateFrom</Text>}
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
