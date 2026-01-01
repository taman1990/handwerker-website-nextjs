import { Container } from "@/components/ui/Container";

export default function DatenschutzPage() {
  return (
    <Container>
      <div className="py-20 max-w-[720px] space-y-6">

        <h1 className="text-[32px] font-semibold">Datenschutzerklärung</h1>

        <p className="text-[15px] text-text-muted">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig.
          Personenbezogene Daten werden ausschließlich im Rahmen
          der gesetzlichen Vorschriften verarbeitet.
        </p>

        <div className="space-y-4 text-[15px]">
          <p>
            Beim Besuch dieser Website werden keine personenbezogenen
            Daten gespeichert, sofern Sie uns diese nicht aktiv
            über das Kontaktformular übermitteln.
          </p>

          <p>
            Die übermittelten Daten werden ausschließlich zur
            Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte
            weitergegeben.
          </p>

          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung
            oder Löschung Ihrer gespeicherten Daten.
          </p>
        </div>

      </div>
    </Container>
  );
}
