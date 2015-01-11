package cat.wereinitforthemoney.capitalistpigs.backend.model;

/**
 * @author loic
 */
public class User extends IdentifiableEntity {
    private static final long serialVersionUID = 984401783135313314L;

    private String name;
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
