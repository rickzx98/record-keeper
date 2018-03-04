package acn.blockhain.business.resource;

import acn.blockhain.entity.valueobjects.Record;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/services")
@Produces(MediaType.APPLICATION_JSON)
public class RecordKeeperService {

    @Inject
    RecordKeeper recordKeeper;

    @POST
    @Path("/generate")
    @Consumes({MediaType.APPLICATION_JSON})
    public void generate(Record record){

        recordKeeper.generate(record);
    }

    @GET
    @Path("/retrieve/{criteria}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Record> retrieveRecords(@QueryParam(value = "criteria") String criteria) {

        return recordKeeper.getAll(criteria);
    }
}
