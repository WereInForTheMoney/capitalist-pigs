package cat.wereinitforthemoney.capitalistpigs.backend.model;

import org.apache.commons.validator.Validator;

/**
 * @author loic
 */
public class MailAdress {
    private String address;

    public MailAdress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return address;
    }
}
