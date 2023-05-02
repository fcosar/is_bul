import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJob = () => {
  const navigate = useNavigate();
  // formun stateini tutma
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: '',
    company: '',
    location: '',
    status: 'Mülakat',
    type: 'Tam Zaman',
    date: new Date().toLocaleDateString(),
  });

  // gönder butonuna tıklanınca
  const handleSubmit = () => {
    // alınan veriyi doğrulama
    if (!formState.position || !formState.company || !formState.location) {
      toast.warn('Bütün form alanlarını doldurun');
      return;
    }
    // veri gönderme işlemi
    axios
      .post('http://localhost:3030/jobs', formState)
      // eğer atılan istek başarılı olursa
      .then((res) => {
        // kullanıcıyı bilgilendir
        toast.success('İş başarıyla eklendi');
        // kullanıcıyı ana sayfaya yönlendirir
        navigate('/');
      })
      // eğer başarısız olursa
      .catch((err) => {
        // kullanıcıyı bilgilendir
        toast.error('İşi eklerken bir hata oluştu');
      });
  };

  return (
    <section className="add-sec">
      <h2>Yeni İş Ekle</h2>

      <div className="inputs">
        <div className="input-field">
          <label>Pozisyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, position: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Şirket</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, company: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Lokasyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, location: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Durum</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          >
            <option value="Mülakat">Mülakat</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>

        <div className="input-field">
          <label>Tür</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          >
            <option value="Tam Zaman">Tam Zaman</option>
            <option value="Yarı Zaman">Yarı Zaman</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Staj">Staj</option>
          </select>
        </div>

        <button onClick={handleSubmit}>Ekle</button>
      </div>
    </section>
  );
};

export default AddJob;