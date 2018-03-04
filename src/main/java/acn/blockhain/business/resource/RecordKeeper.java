package acn.blockhain.business.resource;

import acn.blockhain.entity.valueobjects.Record;

import java.util.List;

public interface RecordKeeper {

    void generate(Record record);

    List<Record> getAll(String criteria);
}
