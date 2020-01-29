import React, {useState} from 'react';
import { Link } from 'react-router-dom'
// import { useEffect, useState, useRef } from 'react';
import classes from './FAQ.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/FAQCarousel';
import Footer from '../../Components/Footer/Footer';

function FAQ() {
  const [lang,setLang] = useState('ID')
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' stickyHeader/></div>
      <Carousel/>
      { (lang === 'ID')
        ? <div className={classes.FAQTexts}>
            <p style={{marginBottom:0,fontSize:12}}>Halaman ini ditampilkan dalam Bahasa Indonesia</p>
            {/*<span style={{marginTop:10}} className={classes.changeLang} onClick={()=>setLang('EN')}>Change to English</span>*/}
            <div className={classes.FAQText}>
              <h2>Bagaimana cara membeli produk Brodewijk?</h2>
              <p className={classes.FAQPar}>
                <ol>
                <li>Apabila Anda ingin membeli secara online, men-custom jas Anda secara real-time, dan mengukur sendiri jas Anda/memilih ukuran standard, maka Anda bisa memesan melalui fitur <Link to="/customize/"><u>Customize</u></Link></li>
                <li>Apabila Anda ingin berkonsultasi dan memesan langsung jas Anda serta melakukan pengukuran langsung oleh kami, maka kami bisa mendatangi Anda sesuai dengan jadwal yang telah di-book pada fitur <Link to="/appointment/"><u>Book Appointment</u></Link></li>
                <li>Apabila Anda ingin memesan secara massal/khusus, seperti untuk keperluan Wedding, corporate, tv shows, bisnis, dan lainnya. Maka, Anda bisa mengontak kami melalui halaman <Link to="/contact-us/"><u>Contact Us</u></Link></li>
                </ol>
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah saya dikenakan biaya tambahan jika saya ingin diukur langsung/menggunakan fitur Book Appointment?</h2>
              <p className={classes.FAQPar}>
                Ya, Anda akan dikenakan biaya tambahan sebesar Rp50.000 sebagai biaya perjalanan dan service. 
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Bagaimana cara membayarnya?</h2>
              <p className={classes.FAQPar}>
                Untuk pemesanan melalui:
                <ol>
                  <li><Link to="/customize/"><u>Online Customization</u></Link>: Pembayaran lunas 100% di awal</li>
                  <li><Link to="/appointment/"><u>Book Appointment</u></Link>: Pembayaran DP 50% di awal dan pelunasan 50% lainnya pada saat jas selesai dibuat</li>
                  <li><Link to="/partnership/"><u>Partnership</u></Link>: Pembayaran DP 50% di awal dan pelunasan 50% lainnya pada saat jas selesai dibuat</li>
                </ol> 
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah harga yang tertera pada situs Brodewijk dapat dinegosiasikan?</h2>
              <p className={classes.FAQPar}>
                Tidak.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah Brodewijk menerima jasa jahit saja tapi kain bawa sendiri?</h2>
              <p className={classes.FAQPar}>
                Tidak. Brodewijk hanya bisa melakukan pembuatan jas dengan kain yang kami sediakan demi menjaga kualitas barang. 
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah tersedia jas yang sudah jadi untuk langsung dibeli atau disewa?</h2>
              <p className={classes.FAQPar}>
                Tidak, untuk saat ini Brodewijk belum menyediakan layanan sewa jas dan belum menjual jas yang telah jadi.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah Brodewijk menyediakan layanan reparasi jas dan kelengkapannya?</h2>
              <p className={classes.FAQPar}>
                Tidak, Kami hanya memperbaiki kerusakan selama pemakaian bagi Customer yang ketentuannya diatur dalam <i>Terms & Conditions</i>.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah Brodewijk memiliki toko <i>offline</i> atau <i>store</i>?</h2>
              <p className={classes.FAQPar}>
                Tidak. Untuk saat ini Kami beroperasi secara online
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Bagaimana cara Brodewijk menjamin kualitas produk yang diproduksi?</h2>
              <p className={classes.FAQPar}>
                Selama pembuatan, Brodewijk melakukan Quality Control berkali-kali pada periode tertentu agar produk sesuai dengan kualitas internasional dan sesuai dengan ekspektasi customer
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apa jaminan untuk kepuasan konsumen?</h2>
              <p className={classes.FAQPar}>
                Apabila produk yang Anda terima tidak sesuai dengan pesanan Anda, maka produk bisa dikembalikan dan akan kami ganti dengan produk yang sesuai dengan pesanan Anda sebelumnya yang diatur dalam <i>Terms & Conditions</i>.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah ada tambahan biaya pengiriman?</h2>
              <p className={classes.FAQPar}>
                Tidak. Seluruh pembelian berhak atas free shipping.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Berapa lama pengerjaan jas dan kelengkapannya?</h2>
              <p className={classes.FAQPar}>
                Standarnya adalah 15 (lima belas) hari terhitung dari tanggal transaksi dan tidak termasuk pengiriman.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apakah ada layanan ekspres?</h2>
              <p className={classes.FAQPar}>
                Ada. Waktu tercepat pengerjaan adalah 2 (dua) hari, dapat dilakukan dengan kondisi khusus termasuk diantaranya penambahan biaya sebesar Rp50.000 per pengurangan jumlah hari.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Berapa lama pengiriman produk?</h2>
              <p className={classes.FAQPar}>
                Lama pengiriman bergantung pada jenis layanan kurir ekspedisi dan lokasi pengiriman.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Bagaimana Customer tahu bahwa pesanan sudah dikirim?</h2>
              <p className={classes.FAQPar}>
                Brodewijk akan mengirimkan SMS berupa nomor resi pengiriman paling lambat H+2 setelah produk di pick-up oleh kurir ekspedisi, sebagai bukti produk pesanan Anda sudah dikirim. Untuk itu pada saat pemesanan, mohon agar nomor telepon yang dicantumkan adalah nomor Anda yang selalu aktif dan dapat dihubungi.
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apa yang harus saya lakukan apabila belum mendapatkan nomor resi?</h2>
              <p className={classes.FAQPar}>
                Mohon untuk langsung menghubungi kami di <a href='tel:+628156051373'>SMS/WhatsApp: <u>08156051373</u></a> atau <a href='mailto:contact@brodewijk.com'>e-mail: <u>contact@brodewijk.com</u></a>
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apa yang harus saya lakukan apabila produk yang saya terima tidak sesuai/rusak/cacat?</h2>
              <p className={classes.FAQPar}>
                Produk yang tidak sesuai/rusak/cacar dapat dikembalikan dan akan diperbaiki sesuai dengan ketentuan pada <i>Terms & Conditions</i>. 
              </p>
            </div>
            <div className={classes.FAQText}>
              <h2>Apa yang membedakan produk jas Brodewijk dengan jas di tukang jahit biasa atau jasa jas jahit lainnya?</h2>
              <p className={classes.FAQPar}>
                Kami menawarkan jas premium kualitas tinggi dengan harga yang sesuai dengan value yang ditawarkan. Berbeda dengan tempat jas lainnya yang menawarkan kualitas rendah atau biasa tapi dengan harga yang tidak sesuai dengan kualitasnya. Anda dapat membuktikan ini dari jenis lining (kain bagian dalam jas), kerapihan jahitan, ketebalan lapisan jas, model, kain luar jas, serta keakuratan pengukurannya. 
              </p>
            </div>
          </div>
        : <div className={classes.FAQTexts}>
            <p style={{marginBottom:0}}>This page is in English</p>
            <span style={{marginTop:10}} className={classes.changeLang} onClick={()=>setLang('ID')}>Ubah ke Bahasa Indonesia</span>
          </div>
      }
      <Footer/>
    </div>
  );
}

export default FAQ;