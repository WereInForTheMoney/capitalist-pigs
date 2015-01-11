package cat.wereinitforthemoney.capitalistpigs.backend.model;

/**
 * @author loic
 */
public class Event extends IdentifiableEntity {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
