package cat.wereinitforthemoney.capitalistpigs.backend.model;

import java.util.List;

/**
 * @author loic
 */
public class Alert extends IdentifiableEntity {
    private List<MailAdress> recipients;

    public List<MailAdress> getRecipients() {
        return recipients;
    }

    public void setRecipients(List<MailAdress> recipients) {
        this.recipients = recipients;
    }
}
