import { useDispatch } from 'react-redux';
import {
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} from '../app/jobSlice';
import { toast } from 'react-toastify';

const Filter = () => {
  const dispatch = useDispatch();

  // şirket ismi inputu değiştiğinde
  const onSearchChange = (e) => {
    dispatch(handleInputChange(e.target.value));
  };

  // durum filtresi değişitiğinde
  const onStatusChange = (e) => {
    dispatch(handleStatusChange(e.target.value));
    toast.success('Başarıyla Fitrelendi', { autoClose: 2000 });
  };

  // sıralama selecti değiştiğinde
  const onSortChange = (e) => {
    dispatch(handleSortChange(e.target.value));
    toast.success('Başarıyla Fitrelendi', { autoClose: 2000 });
  };

  // filtreleri temizle
  const onResetButtonClick = () => {
    // aksiyonu çalıştırma
    dispatch(handleReset());
    // kullanıcıyı bilgilendirme
    toast('Filtreler Temizlendi', { autoClose: 2000 });
  };

  return (
    <section className="add-sec filter-sec">
      <h2>Arama Formu</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Şirket İsmi:</label>
          <input type="text" onChange={onSearchChange} />
        </div>

        <div className="input-field">
          <label>Durum:</label>
          <select onChange={onStatusChange}>
            <option hidden>Hepsi</option>
            <option value="Mülakat">Mülakat</option>
            <option value="Reddedildi">Reddedildi</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
          </select>
        </div>

        <div className="input-field">
          <label>Sırala:</label>
          <select onChange={onSortChange}>
            <option value="Önce-Yeni">En Yeni</option>
            <option value="Önce-Eski">En Eski</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button onClick={onResetButtonClick}>Filtreleri Temizle</button>
      </div>
    </section>
  );
};

export default Filter;