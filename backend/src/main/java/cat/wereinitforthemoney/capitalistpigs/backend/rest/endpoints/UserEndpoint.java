package cat.wereinitforthemoney.capitalistpigs.backend.rest.endpoints;

import cat.wereinitforthemoney.capitalistpigs.backend.model.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author loic
 */
@Path("user")
@Produces(MediaType.APPLICATION_JSON)
public class UserEndpoint {
    @POST
    public Response createUser(User user){
        return Response.ok().build();
    }

    @GET
    @Path("/{userId}")
    public Response getUser(@PathParam("userId")String userId) {
        User user = new User();
        user.setId(userId);
        user.setName("lol");
        user.setPassword("secretlol");

        return Response.ok().entity(user).build();
    }
}
