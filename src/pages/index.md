---
title: 'Hohe Kosten für Strom und Gas: Wie teuer ist eine heiße Dusche?'
description: 'Die Kosten für Strom und Gas sind stark gestiegen. Grund genug, auf den Energieverbrauch zu achten. Aber wissen Sie eigentlich, wie viel eine heiße Dusche kostet? Oder wie viel Strom Ihr PC verbraucht?'
author: Jörn Kießler
pub_date: '2022-10-19'
heroImage: 'Stromzaehler_2.jpg'
heroAlt: ''
heroCredit: ''
sharingImageFacebook: 'strom-spar-quiz.jpg'
sharingImageTwitter: 'strom-spar-quiz.jpg'
cg1: 'WDR'
cg2: 'Data'
cg3: 'Quiz'
cg4: 'Energieverbrauch'
---

import DataWrapper from '../components/datawrapper/datawrapper.jsx'
import Quote from '../components/quote/quote.jsx'
import Webtrekk from '../components/webtrekk/webtrekk.jsx'
import Sharing from '../components/sharing/sharing.jsx'
import WdrPlayer from '../components/video/video.jsx'
import { Link, LinkList } from '../components/link/link.jsx'
import { Quiz, Image as QuizImage, Question, Answer, Result, Score as QuizScore } from '../components/quiz/quiz.jsx'
import { SetPriceElectricity, SetPriceGas, PriceElectricity, PriceGas, CostElectricity, CostGas } from '../components/energy-prices/energyPrices.jsx'

<SetPriceElectricity centPerKWh={53.83} />
<SetPriceGas centPerKWh={20.54}/>

## Steigende Kosten für Strom und Gas

# Quiz: Wissen Sie ... wieviel Sie für Energie ausgeben?

Schon vor dem Angriff Russlands auf die Ukraine stiegen die Kosten für Energie. Bereits im Januar meldete der Bundesverband der Energie- und Wasserwirtschaft (BDEW), dass Haushalte, die einen neuen Vertrag abgeschlossen hatten, durchschnittlich zwölf Prozent mehr für ihren Strom zahlen mussten als im vergangenen Jahr. Seitdem ist der Preis laut dem Vergleichsportal Verivox erneut um fast ein Drittel gestiegen.

Ähnlich sieht es beim Gaspreis für Privatkunden aus: Er stieg seit Januar laut Verivox sogar um mehr als ein Drittel. Dabei mussten Neukunden im Januar laut BDEW bereits 73 Prozent mehr als den Durchschnittspreis 2021 zahlen.

<Link title="Gestiegene Energiekosten: So hoch sind aktuell die Gas- und Strompreise in NRW" href="https://www1.wdr.de/nachrichten/so-sind-die-gas-und-strompreise-aktuell-in-nrw-100.html" />

Die Zahlen machen eines sehr deutlich: Es lohnt sich, den Energieverbrauch zu senken. Doch an welcher Stelle geht das am besten? Und womit schone ich mit wenig Aufwand am effektivsten meinen Geldbeutel?

## Wissen Sie ...?

Mit „Wissen Sie ...?“ können Sie überprüfen, wie gut Sie sich mit Energiesparen auskennen. Für unsere Alltagsbeispiele haben wir als Bemessensgrundlage den durchschnittlichen Strompreis angesetzt, den das Vergleichsportal Verivox für den Monat Oktober für einen drei bis vier Personen-Haushalt mit einem Jahresverbrauch von 4.000 kWh errechnet hat. Er liegt demnach bei <PriceElectricity /> Cent/kWh. Beim durchschnittlichen Gaspreis haben wir uns ebenfalls an Daten von Verivox für Oktober orientiert (<PriceGas /> Cent/kWh). Sie basieren auf einem Jahresverbrauch von 20.000 kWh.

Viel Spaß beim Quiz!

<Quiz>
<QuizImage src="Standby_TV.jpg" alt="Ein Mann richtet eine Fernbedienung auf einen Fernseher im Standby-Modus" />
<Question>**Wissen Sie, was es Sie jährlich kostet, wenn Sie den Fernseher immer im Standby-Modus lassen?**</Question>
<Answer>Nichts</Answer>
<Answer correct><CostElectricity kWh={4.38} /> Euro</Answer>
<Answer><CostElectricity kWh={22.6} /> Euro</Answer>
<Answer><CostElectricity kWh={120} /> Euro</Answer>
<Result>
Ein TV-Gerät im Standby verbraucht jährlich gut 4,38 kWh Strom. Bei einem durchschnittlichen Strompreis von <PriceElectricity /> Cent/ kWh sind das <b><CostElectricity kWh={4.38} /> Euro/pro Jahr</b>.
</Result>
</Quiz>

### Spartipps

Das größte Sparpotenzial hat der Fernseher nicht. Trotzdem lohnt es sich, über ausstellbare Steckerleisten nachzudenken. Daran lassen sich nämlich auch andere Geräte anschließen, die sich sonst nach dem Abschalten auch im Standby-Modus befinden und Strom verbrauchen.

Dazu gehören u.a.:

- Receiver
- Spielkonsolen
- Drucker
- Tisch- oder Stehlampen mit Netzteil
- Ladegeräte für Handy, Smartphones und andere Geräte

<Link title="Energiespartipps: So verbrauchen Sie weniger Gas und Strom im Alltag" href="https://www1.wdr.de/nachrichten/gas-energie-sparen-spartipps-100.html" />

<Quiz>
<QuizImage src="Kuehlschrank_1.jpg" alt="Mehrere Plastikdosen mit Lebensmitteln stehen in einem beleuchteten Kühlschrank." />
<Question>**Wissen Sie, wie viel Geld Sie im Jahr sparen könnten, wenn Sie die Temperatur in Ihrem Kühlschrank um ein Grad nach oben stellen würden?**</Question>
<Answer><CostElectricity kWh={65 * 0.02} /> Euro</Answer>
<Answer correct><CostElectricity kWh={65 * 0.06} /> Euro</Answer>
<Answer><CostElectricity kWh={65 * 0.21} /> Euro</Answer>
<Answer><CostElectricity kWh={65 * 0.50} /> Euro</Answer>
<Result>
Ein sparsamer Kühlschrank der Effizienzklasse D ohne Gefrierfach verbraucht jährlich etwa 65 kWh Strom. Bei dem aktuellen durchschnittlichen Strompreis von <PriceElectricity /> Cent/ kWh sind das <CostElectricity kWh={65} /> Euro/pro Jahr. Wer den Kühlschrank auf sieben statt auf sechs Grad einstellt, senkt den Stromverbrauch um sechs Prozent. Das entspricht einer Geldersparnis von <b><CostElectricity kWh={3.9} /> Euro</b>.
</Result>
</Quiz>

### Spartipps

Auch der Kühlschrank bietet – wird er optimal genutzt – nicht das größte Sparpotenzial. Allerdings kann er die Energiekosten schnell auch etwas ansteigen lassen.
Um das zu verhindern, sollten Sie auf Folgendes achten:

- Lassen Sie den Kühlschrank nicht zu häufig und zu lange offen stehen.
- Lassen Sie Speisen erst vollständig abkühlen, bevor Sie sie in den Kühlschrank stellen.
- Tauen Sie Ihre Gefriertruhe regelmäßig ab und lassen Sie sie nicht zu stark vereisen.

Hat Ihr Kühlschrank bereits ein paar Dienstjahre auf dem Buckel und nicht die beste Energieeffizienzklasse, lohnt es sich, über einen neuen nachzudenken. Tipps für den Kauf gibt es bei der Verbraucherzentrale NRW.

<Link title="So finden Sie den passenden Kühlschrank" href="https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/so-finden-sie-den-passenden-kuehlschrank-10573" />

<Quiz>
<QuizImage src="Trockner.jpg" alt="Ein weißes Handtuch liegt in der Trommel eines Wäschetrockners." />
<Question>**Wissen Sie, was es kostet, eine Maschine Wäsche in einem Wärmepumpentrockner zu trocknen?**</Question>
<Answer><CostElectricity kWh={0.2} /> Euro</Answer>
<Answer><CostElectricity kWh={0.8} /> Euro</Answer>
<Answer correct><CostElectricity kWh={1.5} /> Euro</Answer>
<Answer><CostElectricity kWh={4} /> Euro</Answer>
<Result>
Ein Wärmepumpentrockner der Energieeffizienzklasse A verbraucht pro Durchgang im Schnitt 1,5 kWh Strom. Bei einem Strompreis von <PriceElectricity /> Cent/ kWh sind das <b><CostElectricity kWh={1.5} /> Euro</b>. Der von den Herstellern angegebene Jahresstromverbrauch geht davon aus, dass die Trockner 160 Mal im Jahr laufen. Das entspricht <CostElectricity kWh={1.5 * 160} round="euro" /> Euro. 
</Result>
</Quiz>

### Spartipps

Folgende Dinge sollten Sie beachten, um beim Wäschetrocknen Energie zu sparen:

- Nutzen Sie das Fassungsvermögen des Trockners aus.
- Schleudern Sie die Kleidung vorher in der Waschmaschine bei möglichst hoher Drehzahl.

<Quiz>
<QuizImage src="Trockner_2.jpg" alt="Ein Arm steckt Wäsche in einen älteren Wäschetrockner." />
<Question>**Wissen Sie, was es kostet, eine Maschine Wäsche in einem Ablufttrockner zu trocknen?**</Question>
<Answer><CostElectricity kWh={0.2} /> Euro</Answer>
<Answer><CostElectricity kWh={0.6} /> Euro</Answer>
<Answer><CostElectricity kWh={1.8} /> Euro</Answer>
<Answer correct><CostElectricity kWh={5.5} /> Euro</Answer>
<Result>
Ältere Ablufttrockner können bis zu 5,5 kWh Strom verbrauchen, hier liegen die Kosten je Durchgang bei <b><CostElectricity kWh={5.5} /> Euro</b>. Der von den Herstellern angegebene Jahresstromverbrauch geht davon aus, dass die Trockner 160 Mal im Jahr laufen. Das entspricht <CostElectricity kWh={5.5 * 160} round="euro" /> Euro. 
</Result>
</Quiz>

### Spartipps

Gerade Haushalte, in denen sehr häufig der Trockner läuft, sollten bei der Anschaffung mehr Geld in die Hand nehmen. Die höheren Kosten für einen Wärmepumpentrockner, der wesentlich weniger Strom verbraucht als ein Kondenstrockner oder ein Ablufttrockner, gleichen sich relativ schnell wieder aus.

<Link title="Wäschetrockner: Tipps zum Kauf und Stromverbrauch" href="https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/waeschetrockner-tipps-zum-kauf-und-stromverbrauch-37984" />

<Quiz>
<QuizImage src="Duschen_1.jpg" alt="Aus einem Duschkopf spritzen viele dünne Wasserstrahlen." />
<Question>**Wissen Sie, was fünf Minuten unter der heißen Dusche kosten, wenn Sie einen elektronischen Durchlauferhitzer haben?**</Question>
<Answer><CostGas kWh={2.71} /> Euro</Answer>
<Answer><CostElectricity kWh={1.2} /> Euro</Answer>
<Answer correct><CostElectricity kWh={1.68} /> Euro</Answer>
<Answer><CostElectricity kWh={4} /> Euro</Answer>
<Result>
Eine fünfminütige Dusche bei einer Wassertemperatur von 38 Grad und einer Schüttmenge von zehn Litern pro Minute kostet bei der Nutzung eines elektronischen Durchlauferhitzers und einem Strompreis von <PriceElectricity /> Cent/ kWh <b><CostElectricity kWh={1.68} /> Euro je Duschvorgang</b>. Wer täglich duscht, verursacht so Stromkosten in Höhe von rund <CostElectricity kWh={1.68 * 365} round="euro" /> Euro pro Jahr.
</Result>
</Quiz>

### Spartipps

Das können Sie tun, um beim Duschen Energie zu sparen:

- Einen Sparduschkopf nutzen. So verbrauchen Sie weniger Wasser, das zuvor erhitzt werden muss.
- Therme, Durchlauferhitzer etc. so einstellen, dass das Wasser eine angenehme Temperatur hat, wenn der Regler auf maximal heiß steht.

<Quiz>
<QuizImage src="Dusche_Hund.jpg" alt="Ein eingeschäumter Dackel steht unter einer Dusche und wird abgebraust." />
<Question>**Und was kostet Sie eine genauso lange Dusche, wenn das Wasser mit Erdgas in einem Brennwertkessel erhitzt wird?**</Question>
<Answer correct><CostGas kWh={2.71} /> Euro</Answer>
<Answer><CostElectricity kWh={1.2} /> Euro</Answer>
<Answer><CostElectricity kWh={1.68} /> Euro</Answer>
<Answer><CostElectricity kWh={4} /> Euro</Answer>
<Result>
Wird das Wasser mit Erdgas in einem Brennwertkessel erhitzt, entstehen Kosten von <b><CostGas kWh={2.71} /> Euro je Duschvorgang</b> und somit etwa <CostGas kWh={2.71 * 365} round="euro" /> Euro im Jahr.
</Result>
</Quiz>

### Spartipps

Gerade wenn es um Duschen oder Baden geht, gibt es unzählige Kombinationen, wie das Wasser dafür erhitzt werden kann. Wenn Sie eine andere Methode dafür nutzen als die in unseren Beispielen – z.B. eine Erdwärmepumpe oder Holzpellets – können Sie mit dem Duschrechner der Verbraucherzentrale NRW ihren exakten Energieverbrauch sowie die Kosten dafür berechnen.

<Link title="Duschrechner" href="https://www.verbraucherzentrale.nrw/duschrechner" />

<Quiz>
<QuizImage src="Heizen.jpg" alt="Eine Hand dreht am Regler einer Wandheizung." />
<Question>**Wissen Sie, wie viel Geld Sie jährlich sparen, wenn Sie die Temperatur in Ihrer Neubauwohnung mit Gasheizung um ein Grad Celsius herunterdrehen?**</Question>
<Answer><CostGas kWh={100} round="euro" /> Euro</Answer>
<Answer correct><CostGas kWh={420} round="euro" /> Euro</Answer>
<Answer><CostGas kWh={840} round="euro" /> Euro</Answer>
<Answer><CostGas kWh={1900} round="euro" /> Euro</Answer>
<Result>
Wer die Raumtemperatur um ein Grad senkt, reduziert den Energieverbrauch um etwa sechs Prozent. Bei einer energetisch gut sanierten beziehungsweise neu gebauten 70-Quadratmeter-Wohnung mit Gasheizung und einem Heizenergieverbrauch von 7.000 kWh reduzieren sich die jährlichen Energiekosten somit um 420 kWh beziehungsweise rund <b><CostGas kWh={420} round="euro" /> Euro</b>.
</Result>
</Quiz>

### Spartipps

Das können Sie zudem noch machen, um Heizkosten zu sparen:

- Lüften Sie regelmäßig ihre Heizkörper.
- Stellen Sie keine Möbel vor die Heizkörper.
- Vermeiden Sie, dass Vorhänge vor der Heizung hängen.
- Drehen Sie die Heizung herunter, wenn Sie nicht zuhause sind.

<Link title="10 einfache Tipps zum Heizkosten sparen" href="https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/heizung-10-einfache-tipps-zum-heizkosten-sparen-13892" />

<Quiz>
<QuizImage src="Heizen_Altbau.jpg" alt="Eine Decke liegt auf der Fensterbank über einem Heizkörper in einem Altbau." />
<Question>**Und wie viel Geld sparen Sie im Jahr, wenn Sie die Temperatur in Ihrer Altbauwohnung mit Gasheizung um ein Grad Celsius herunterdrehen?**</Question>
<Answer><CostGas kWh={100} round="euro" /> Euro</Answer>
<Answer><CostGas kWh={420} round="euro" /> Euro</Answer>
<Answer correct><CostGas kWh={840} round="euro" /> Euro</Answer>
<Answer><CostGas kWh={1900} round="euro" /> Euro</Answer>
<Result>
In einem unsanierten Altbau geht man bei einer 70-Quadratmeter-Wohnung mit Gasheizung von einem durchschnittlichen Heizenergieverbrauch von 14.000 kWh pro Jahr aus. Dreht man die Raumtemperatur um ein Grad herunter, spart man sechs Prozent der Energie und reduziert so den Verbrauch um 840 kWh. Damit würden gut <b><CostGas kWh={840} round="euro" /> Euro</b> jährlich gespart werden.
</Result>
</Quiz>

### Spartipps

Oft lohnen sich auch Sanierungen, die nicht die Heizung betreffen, um Heizkosten zu sparen:

- Überprüfen Sie, ob die Heizungsnischen in Ihrer Wohnung gedämmt sind und holen Sie das gegebenenfalls nach.
- Dichten Sie Fenster und Türen ab.
- Auch über nicht isolierte Rolllädenkästen kann viel Wärme verloren gehen.

<Quiz>
<QuizImage src="Computer_1.jpg" alt="Eine rothaarige Frau mit Locken steht vor einem Schreibtisch mit einem Desktop-PC." />
<Question>**Wissen Sie eigentlich, was es Sie im Jahr kostet, wenn Ihr PC im Homeoffice an fünf Tagen in der Woche für acht Stunden läuft? **</Question>
<Answer><CostElectricity kWh={0.2 * 220} round="euro" /> Euro</Answer>
<Answer correct><CostElectricity kWh={0.6 * 220} round="euro" /> Euro</Answer>
<Answer><CostElectricity kWh={1.7 * 220} round="euro" /> Euro</Answer>
<Answer><CostElectricity kWh={4 * 220} round="euro" /> Euro</Answer>
<Result>
Ein Desktop-PC verbraucht bei typischen Büroanwendungen an einem achtstündigen Arbeitstag etwa 0,6 kWh Strom. Bei einem Strompreis von <PriceElectricity /> Cent/ kWh und 220 Arbeitstagen im Jahr ergeben sich so jährliche Kosten von <b><CostElectricity kWh={0.6 * 220} round="euro" /> Euro</b>.
</Result>
</Quiz>

### Spartipps

Gerade beim Computer lohnt es sich, ein Gerät zu kaufen, das zu Ihren Anforderungen passt. Brauchen Sie nicht unbedingt einen Desktop-PC, können Sie mit einem Laptop schon richtig Energiekosten sparen. Ein Standard-Laptop verbraucht mit 0,2 kWh je Tag nämlich nur ein Drittel des Stroms, den ein Desktop-PC benötigt. Die jährlichen Energiekosten dafür sinken dann auch auf <CostElectricity kWh={0.2 * 220} round="euro" /> Euro.

Besonders deutlich wird das Einsparpotenzial bei richtigen High-End-Geräten: Ein gut ausgestatteter Gaming PC beispielsweise verbraucht rund 1 kWh am Tag und verursacht aufs Jahr gerechnet somit Kosten in Höhe von gut <CostElectricity kWh={1.0 * 220} round="euro" /> Euro - wenn er nur an 220 Tagen läuft. Ist er an allen Tagen des Jahres acht Stunden eingeschaltet, summieren sich die Kosten auf <CostElectricity kWh={1.0 * 365} round="euro" /> Euro.

<QuizScore
images={{
0: "0_Leuchthaus.jpg",
4: "4_Sparsteckdose.jpg",
7: "7_Energiecheck.jpg",
9: "Stromzaehler_1.jpg",
}}
texts={{
0: "Da ist ernergiespartechnisch noch viel Luft nach oben. Am besten das Quiz direkt noch einmal machen.",
4: "Sie wissen beim Energiesparen Bescheid. An ein paar Stellschrauben können Sie aber noch drehen.",
7: "Ziemlich gut! Viel Sparpotenzial gibt es bei Ihnen zuhause nicht mehr.",
9: "Volle Punktzahl: Sie sind ein wahrer Energiespar-Profi.",
}}
/>

<Link title="Energiespar-Tipps für das Homeoffice" href="https://verbraucherzentrale-energieberatung.de/energiesparen-im-homeoffice-computer/" />

<Sharing twitter facebook mail whatsapp telegram reddit xing linkedin />
