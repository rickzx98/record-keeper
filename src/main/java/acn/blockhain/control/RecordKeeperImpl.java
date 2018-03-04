package acn.blockhain.control;

import acn.blockhain.business.resource.RecordKeeper;
import acn.blockhain.entity.valueobjects.Record;

import javax.inject.Inject;
import java.util.List;

public class RecordKeeperImpl implements RecordKeeper {

    @Inject
    HyperLedgerStub hyperLedgerStub;

    public void generate(Record record) {

        hyperLedgerStub.generate(record);
    }

    public List<Record> getAll(String criteria) {


        return hyperLedgerStub.retrieve(criteria);
    }
}
