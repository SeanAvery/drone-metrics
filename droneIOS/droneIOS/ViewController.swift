import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        buttonView()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func buttonView() {
        let bleButton = UIButton()
        bleButton.frame = CGRect(origin: .zero, size: CGSize(width: 100, height: 100));
        bleButton.backgroundColor = UIColor(red: 40/255.0, green: 170/255.0, blue: 45/255.0, alpha: 1);

        bleButton.addTarget(self, action: "pressed", for: .touchUpInside);
        self.view.addSubview(bleButton);
    }

    func pressed(sender: UIButton!) {
        alertView = UIAlertView();
        alertView.addButtonWithTitle("Ok");
        alertView.title = "title";
        alertView.message = 'message';
        alertView.show();
    }

}
