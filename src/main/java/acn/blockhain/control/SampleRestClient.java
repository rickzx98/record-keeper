package acn.blockhain.control;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class SampleRestClient {

    public void get() throws IOException {

        HttpClient client = HttpClientBuilder.create().build();
        HttpGet httpGet = new HttpGet("https://<<Smart CLaim URL>>");
        httpGet.setHeader("Content-Type", "application/json");
        HttpResponse response = client.execute(httpGet);
        // Handling JSON response, try to google some of the good APIs that does this
    }

    public void post() throws IOException {

        HttpClient client = HttpClientBuilder.create().build();
        HttpPost httpPost = new HttpPost("https://<<Smart CLaim URL>>");
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setEntity(new StringEntity("This is your request input"));
        HttpResponse response = client.execute(httpPost);
        // Handling JSON response, try to google some of the good APIs that does this
    }

}
