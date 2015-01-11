package cat.wereinitforthemoney.capitalistpigs.backend.rest.endpoints;

import cat.wereinitforthemoney.capitalistpigs.backend.model.User;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

/**
 * @author loic
 */
@Path("user")
public class UserEndpoint {
    @POST
    public Response createUser(User user){
        return Response.ok().build();
    }

    @GET
    @Path("/{userId}")
    public Response getUser(@PathParam("userId")String userId) {
        User u = new User();
        u.setId(userId);
        u.setName("lol");
        u.setPassword("secretlol");

        return Response.ok().entity(u).build(); 
    }
}
