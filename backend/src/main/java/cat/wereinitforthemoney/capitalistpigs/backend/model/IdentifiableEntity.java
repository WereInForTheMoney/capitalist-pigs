package cat.wereinitforthemoney.capitalistpigs.backend.model;

import java.io.Serializable;

/**
 * @author loic
 */
public class IdentifiableEntity implements Serializable {
    private static final long serialVersionUID = 2078496453900021781L;

    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
