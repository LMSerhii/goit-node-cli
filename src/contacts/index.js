const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction(args) {
  try {
    const action = args[0];
    const option = args[1];

    switch (action) {
      case "-a":
        switch (option) {
          case "list":
            const contacts = await listContacts();
            console.table(contacts);
            break;
          case "get":
            const contactId = args[3];
            const contactById = await getContactById(contactId);
            console.log("Contact by ID:", contactById);
            break;
          case "add":
            const name = args[3];
            const email = args[5];
            const phone = args[7];
            const addedContact = await addContact(name, email, phone);
            console.log("Added contact:", addedContact);
            break;
          case "remove":
            const removeId = args[3];
            const removedContact = await removeContact(removeId);
            console.log("Removed contact:", removedContact);
            break;
          default:
            console.warn(
              "Unknown action. Available actions: list, get, add, remove."
            );
        }
        break;
      default:
        console.warn("Unknown action. Available actions: -a");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

invokeAction(process.argv.slice(2));
