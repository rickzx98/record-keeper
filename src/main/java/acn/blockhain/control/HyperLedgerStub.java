package acn.blockhain.control;

import acn.blockhain.entity.valueobjects.Record;

import java.util.ArrayList;
import java.util.List;

public class HyperLedgerStub {

    public List<Record> retrieve(String criteria) {

        List<Record> records = new ArrayList<Record>();

        for (int i=0;i<5;i++) {
            Record record = new Record();
            record.setItemType("Vehicle");
            record.setItem("item: {engineNo: \"00200234\",type:\"Vehicle\",plateNo:\"AAB 1000\"},");
            record.setCompany("company"+i);
            record.setOwner("itemOwner"+i);
            record.setDescription("{\nstatus: \"created a policy\"\n}");
            record.setRecordType("Insurance");
            records.add(record);
        }
        return records;
    }

    public void generate(Record record) {
        System.out.print("Yeah");
    }
}
