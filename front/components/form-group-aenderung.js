import Radio from '../components/radio'
import { useFormContext } from 'react-hook-form'

export default function FormGroupFirmaAenderung() {
  const { watch } = useFormContext()
  const wantsPersist = watch('f_grundmitgliedschaft_behalten')
  const wantsChange = watch('f_grundmitgliedschaft_umwandeln')
  console.log(wantsChange)
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                Änderung Deiner Mitgliedschaft
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6 ">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Radio
                      name="f_grundmitgliedschaft_behalten"
                      value="Nein"
                      title="Ich möchte meine persönliche Grundmitgliedschaft beibehalten und für meine Firma eine zusätzliche Mitgliedschaft beantragen."
                    />
                    <div className=" text-gray-300 font-source font-bold">
                      Je mehr private und gewerbliche Mitglieder der Verband
                      hat, desto stärker kann er gegenüber Öffentlichkeit und
                      Politik wirken. Für die Grundmitgliedschaft werden
                      lediglich 24€/Jahr fällig.
                    </div>
                  </div>
                  <div className="col-span-6">
                    <Radio
                      name="f_grundmitgliedschaft_behalten"
                      value="Ja"
                      title="Ich möchte meine persönliche Grundmitgliedschaft in eine Firmenmitgliedschaft umwandeln."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-purple-600" />
        </div>
      </div>
    </>
  )
}