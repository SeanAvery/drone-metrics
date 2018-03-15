import UIKit
import DJISDK

class ViewController: UIViewController {
    /*
      state variables
    */
    @IBOutlet weak var productConnectStatus: UILabel!
    @IBOutlet weak var productModel: UILabel!
    @IBOutlet weak var bluetoothConnectorButton: UIButton!
    @IBOutlet weak var sdkVersionLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        // self.initView()
        self.view.backgroundColor = UIColor(red: 0.66, green: 0.66, blue: 0.66, alpha: 1.00)

        // label
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 300, height: 30))
        label.textColor = UIColor(red: 0.50, green: 0.96, blue: 0.96, alpha: 1.00)
        label.center = CGPoint(x: 160, y: 285)
        label.textAlignment = .center
        label.text = "DRONE MIND CONTROL"
        label.font = label.font.withSize(24)
        self.view.addSubview(label)

        // button
        let djiButton = UIButton()
        djiButton.frame = CGRect(x: 0, y: 0, width: 200, height: 100)
        djiButton.backgroundColor = UIColor(red: 0.50, green: 0.50, blue: 0.50, alpha: 0.66)
        djiButton.center = CGPoint(x: 160, y: 385)
        djiButton.addTarget(self, action: #selector(onClick), for: .touchUpInside)
        self.view.addSubview(djiButton)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    @objc func onClick(sender: UIButton!) {
        print("yoo made it here")
    }

    func initView() {
        self.title = "DJI Mind CONTROL";
//      self.sdkVersionLabel.text = "DJI SDK Version: \(DJISDKManager.sdkVersion())";
//      self.bluetoothConnectorButton.isEnabled = true;
    }

//    func buttonView() {
//        let bleButton = UIButton()
//        bleButton.frame = CGRect(origin: .zero, size: CGSize(width: 100, height: 100));
//        bleButton.backgroundColor = UIColor(red: 40/255.0, green: 170/255.0, blue: 45/255.0, alpha: 1);
//
//        bleButton.addTarget(self, action: "pressed", for: .touchUpInside);
//        self.view.addSubview(bleButton);
//    }
//
//    func pressed(sender: UIButton!) {
//        alertView = UIAlertView();
//        alertView.addButtonWithTitle("Ok");
//        alertView.title = "title";
//        alertView.message = 'message';
//        alertView.show();
//    }

}

