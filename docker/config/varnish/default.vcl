vcl 4.0;

import std;
import bodyaccess;

backend default {
    .host = "10.254.254.254";
    .port = "80";
}

sub vcl_recv {


    // Keep just a few cookies
    if (req.http.Cookie) {
        set req.http.Cookie = ";" + req.http.Cookie;
        set req.http.Cookie = regsuball(req.http.Cookie, "; +", ";");
        set req.http.Cookie = regsuball(req.http.Cookie, ";(XDEBUG_SESSION|favoritos)=", "; \1=");
        set req.http.Cookie = regsuball(req.http.Cookie, ";[^ ][^;]*", "");
        set req.http.Cookie = regsuball(req.http.Cookie, "^[; ]+|[; ]+$", "");

        if (req.http.Cookie == "") {
//             If there are no more cookies, remove the header to get page cached.
            unset req.http.Cookie;
        }
    }

    //cache posts
    unset req.http.X-Body-Len;

    if (req.method == "POST") {
        std.log("Will cache POST for: " + req.http.host + req.url);
        std.cache_req_body(500KB);
        set req.http.X-Body-Len = bodyaccess.len_req_body();
        if (req.http.X-Body-Len == "-1") {
            return(synth(400, "The request body size exceeds the limit"));
        }
    }
    //end cache posts

    return (hash);
}

//cache posts
sub vcl_hash {
    # To cache POST and PUT requests
    if (req.http.X-Body-Len) {
        bodyaccess.hash_req_body();
    } else {
        hash_data("");
    }
    if (req.http.Cookie) {
        hash_data(req.http.Cookie);
    }
}

sub vcl_backend_fetch {
    if (bereq.http.X-Body-Len) {
        set bereq.method = "POST";
    }
}
//end cache posts
