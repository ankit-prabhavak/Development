import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Get form data
        String user = request.getParameter("username");
        String pass = request.getParameter("password");

        // Simple check (in real apps, check DB)
        if(user.equals("admin") && pass.equals("1234")) {
            // Send data to success.jsp
            request.setAttribute("username", user);
            RequestDispatcher rd = request.getRequestDispatcher("success.jsp");
            rd.forward(request, response);
        } else {
            // Redirect to error.jsp
            RequestDispatcher rd = request.getRequestDispatcher("error.jsp");
            rd.forward(request, response);
        }
    }
}
