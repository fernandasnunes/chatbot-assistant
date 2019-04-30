import { Component, NgZone } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { WatsonService } from '../watson-provider/watson.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { matches } from '@ionic/core/dist/types/components/nav/view-controller';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [TextToSpeech, SpeechRecognition]
})
export class HomePage {

  estadoMic: boolean = true;
  estadoOuvindo: boolean = false;
  estadoRespondendo: boolean = false;

  fala: String = ""
  estado = 0;

  constructor(private tts: TextToSpeech, private watsonService: WatsonService, private stt: SpeechRecognition, private zone: NgZone) { }

  ngOnInit() {
    this.funcaoInput("")
  }

  //CHECA SE TEM PERMISSAO
  temPermissao() {
    //  console.log('entrou')
    this.trocarEstadoMic();
    this.stt.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.stt.requestPermission();
      } else {
        this.comecarOuvir();
      }
    })
  }

  //COMECA A OUVIR A FALA
  comecarOuvir() {
    this.estado = 1
    this.trocarEstadoOuvindo();
    let options = {
      language: 'por-BRA',
      showPopup: false
    }

    this.stt.startListening(options)
      .subscribe(
        (matches: Array<string>) => this.funcaoInput(matches[0]),
        (onerror) => console.log('error:', onerror),
      )
  }

  //WATSON 
  //WATSON ARMAZENA A FALA
  funcaoInput(text) {
    this.fala = text;
    console.log(text)
    //loading show
    const body = {
      apikey: "YbXjEu6o9YbKLsfSxQmOOxapIxl77rFGVZ8WRk_nIGVF",
      workspace_id: "01dd598c-3e3b-4be9-8214-d0012c9c6259",
      url: "https://gateway.watsonplatform.net/assistant/api",
      input: text,
    }
    this.change()
    this.watsonService.postWatson(body).then(
      (res: any) => {
        // loading false
        console.log(res)
        this.funcaoOutput(res.output.text[0])

      }
    );
  }

  //WATSON FALA
  funcaoOutput(texto) {
    this.trocarEstadoRespondendo()
    this.tts.speak({
      text: texto,
      locale: "por-BRA",
      rate: 1.0
    })
  }

  //PARA DE OUVIR (IOS)
  // paraDeOuvir(){
  //   this.stt.stopListening()
  //   this.trocarEstadoRespondendo()
  // }


  trocarEstadoMic() {
    this.estadoMic ? this.estadoMic = false : this.estadoMic = true;
  }

  trocarEstadoOuvindo() {
    if (this.estadoMic == false) {
      this.estadoOuvindo = true;
    } else {
      this.estadoOuvindo = false;
    }
  }

  trocarEstadoRespondendo() {
    if (this.estadoOuvindo == true) {
      this.estadoRespondendo = true
      this.estadoOuvindo = false
      this.estadoMic = false
    }
    this.trocarEstadoMic()
  }

  change() {
    //ATUALIZA A VIEW (TERCEIRA)
    this.zone.run(
      () => {
        this.estado = 2
      }
    )
  }



}

