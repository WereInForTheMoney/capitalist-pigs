package cat.wereinitforthemoney.capitalistpigs.backend.rest.endpoints;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;


/**
 * @author loic
 */
@Path("helloworld")
public class HelloWorldEndpoint {

    @GET
    public Response test(){
        return Response.ok().entity("hello world!").build();
    }
}
