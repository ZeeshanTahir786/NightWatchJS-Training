describe("Name of the group", () => {
  test("should ", (client) => {
    client
      .maximizeWindow()
      .url(`${client.launch_url}/filling-out-forms/`)
      .verify.title("Filling Out Forms - Ultimate QA")
      .setValue("#et_pb_contact_name_0", "Hafiz")
      //   .expect.element("#et_pb_contact_name_0")
      //   .to.have.value.which.equal("Hafiz")
      .pause(1000)
      .setValue("#et_pb_contact_message_0", "Lorem jbdsj")
      //   .expect.element("#et_pb_contact_message_0")
      //   .to.have.value.which.equal("Lorem jbdsj")
      .submitForm("#et_pb_contact_form_0 form")
      .expect.element("#et_pb_contact_form_0")
      .text.to.be.equal("Thanks for contacting us");
  });
  test("Page Object", (client) => {
    const FormPage = client.page.FormPage();
    FormPage.navigate()
      .verify.title("Filling Out Forms - Ultimate QA")
      .enterNameAndMessage(
        "John Doe",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      )
      .submitLeftForm()
      .expect.element("@lblLeftFormMessage")
      .text.to.be.equal("Thanks for contacting us");
  });
  test("should verify error when form fill without filling", (client) => {
    client
      .refresh()
      .submitForm("#et_pb_contact_form_0 form")
      .verify.containsText(
        "#et_pb_contact_form_0",
        "Make sure you fill in all required fields."
      );
  });

  after((client) => {
    client.end();
  });
});
