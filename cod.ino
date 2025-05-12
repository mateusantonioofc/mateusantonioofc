
int in1 = 4;
int in2 = 5;

int in3 = 6;
int in4 = 7;

int btn1 = 10;
int btn2 = 11;

bool stateBTN1 = HIGH;
bool stateBTN2 = HIGH;

void setup() {
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  pinMode(btn1, INPUT_PULLUP);
  pinMode(btn2, INPUT_PULLUP);
  
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

void loop() {
    
    stateBTN1 = digitalRead(btn1);
    stateBTN2 = digitalRead(btn2);
  
    if (stateBTN1 == LOW) {
      Serial.println("oiii");
      shuttdown();
      forward();
    }
  
    if (stateBTN2 == LOW) {
      Serial.println("oiii222");
      shuttdown();
      forward2();
    }
}

void shuttdown() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

void forward() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
}

void forward2() {
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
}

