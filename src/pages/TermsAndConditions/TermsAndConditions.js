import React, {useState} from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './TermsAndConditions.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/TnCCarousel';
import Footer from '../../Components/Footer/Footer';

function TermsAndConditions() {
  const [lang,setLang] = useState('EN')
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' stickyHeader/></div>
      <Carousel/>
      { (lang === 'ID')
        ? <div className={classes.TnCTexts}>
            <p style={{marginBottom:0}}>Halaman ini ditampilkan dalam Bahasa Indonesia</p>
            <span style={{marginTop:10}} className={classes.changeLang} onClick={()=>setLang('EN')}>Change to English</span>
            <div className={classes.TnCText}>
              <h2>Cara Pemesanan</h2>
              <p className={classes.TnCPar}>Semua pemesanan harus dilakukan melalui website, pemesanan yang dilakukan di luar situs Brodewijk tidak dianggap sebagai pemesanan yang sah dan segala risiko bukan menjadi tanggung jawab Kami.</p>
            </div>
            <div className={classes.TnCText}>
              <h2>Cara Pengukuran</h2>
              <p className={classes.TnCPar}>
                Brodewijk menyediakan 3 pilihan cara mendapatkan ukuran yang sesuai yaitu:
                <ol>
                  <li>Online Measurement : Customer melakukan pengukuran sendiri dengan mengikuti tutorial video yang telah diunggah di situs Brodewijk</li>
                  <li>Standard Size: Memilih ukuran jadi yang telah disediakan di situs Brodewijk</li>
                  <li>
                    Book Appointment:  Tim penjahit Brodewijk akan mendatangi Customer dan melakukan pengukuran secara langsung. Layanan ini tunduk pada persyaratan sebagai berikut:
                    <ul>
                      <li>Layanan Book Appointment saat ini hanya berlaku untuk wilayah Jabodetabek (minimum order 3 pcs) dan Bandung (tanpa minimum pemesanan)</li>
                      <li>Customer bisa melakukan reschedule terhadap Book Appointment, namun tidak untuk pembatalan</li>
                      <li>Reschedule dapat dilakukan paling lambat 7 hari sebelum waktu perjanjian yang telah dipesan.</li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
            <div className={classes.TnCText}>
              <h2>Harga dan Cara Pembayaran</h2>
              <p className={classes.TnCPar}>
                <ul>
                  <li>Harga yang tertera adalah fixed price dan tidak bisa berubah kecuali terdapat diskon atau harga promosi</li>
                  <li>Dengan melakukan pemesanan, Customer menyetujui untuk membayar lunas total biaya yang harus dibayarkan, sebagaimana tertera dalam halaman pembayaran</li>
                  <li>Pembayaran dapat dilakukan melalui pilihan metode pembayaran yang terdapat pada Payment Gateway yang telah disediakan oleh Brodewijk atau melalui bank transfer.</li>
                </ul>
              </p>
            </div>
            <div className={classes.TnCText}>
              <h2>Proses Pengerjaan dan Pengiriman</h2>
              <p className={classes.TnCPar}>
                <ul>
                  <li>Kami menjamin kualitas, kesesuaian, dan lama pengerjaan produk yang dipesan oleh Customer</li>
                  <li>Lama pengerjaan adalah 15 (lima belas) hari kerja. Kami tidak bertanggung jawab dalam hal terjadi keterlambatan pengiriman dikarenakan kelalaian atau kesalahan kurir ekspedisi </li>
                  <li>Waktu tercepat pengerjaan adalah 2 (dua) hari, dapat dilakukan dengan kondisi khusus termasuk di antaranya penambahan biaya sebesar Rp. 50,000 per pengurangan jumlah hari</li>
                  <li>Lama pengerjaan 15 (lima belas) hari tidak termasuk pengiriman</li>
                  <li>Lama pengiriman bergantung pada jenis layanan kurir ekspedisi dan lokasi tujuan pengiriman.</li>
                </ul>
              </p>
            </div>
            <div className={classes.TnCText}>
              <h2>Garansi dan Pengembalian</h2>
              <p className={classes.TnCPar}>
                <ul>
                  <li>Produk yang sudah dipesan dan dibayar tidak dapat dibatalkan ataupun dikembalikan dengan alasan apapun</li>
                  <li>Jika produk yang anda pesan tidak sesuai, cacat pada saat diterima, atau mengalami kerusakan selama pemakaian, silahkan menghubungi Customer Service Kami di SMS/WA +628156051373 atau e-mail di contact@brodewijk.com</li>
                  <li>
                    Customer dapat melakukan penukaran produk, dengan ketentuan sebagaimana berikut:
                    <ul>
                      <li>Produk yang diterima tidak sesuai dengan pemesanan yang dilakukan oleh Customer di Situs Brodewijk</li>
                      <li>Adanya kecacatan pada produk yang diterima oleh Customer</li>
                    </ul>
                    Dimana kedua hal tersebut:
                    <ul>
                      <li>Meliputi: jenis bahan, warna, fitur, dan ukuran </li>
                      <li>Kerusakan selama pemakaian produk</li>
                      <li>
                        Kerusakan termasuk namun tidak terbatas kepada:
                        <ul>
                          <li>Jahitan putus/terbuka/tidak rapi</li>
                          <li>Kancing lepas/pecah</li>
                          <li>Ritsleting macet/lepas/patah</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Kami akan mengganti produk yang cacat dengan produk yang baru dengan jenis bahan, warna, fitur, dan ukuran yang sama dengan pesanan sebelumnya</li>
                  <li>Penukaran atau pengembalian karena produk mengalami kerusakan pemakaian/kecacatan berlaku selama 1 tahun (12 bulan dari tanggal transaksi) dan hanya dapat dilakukan 1 kali per transaksi.</li>
                  <li>Biaya yang dikeluarkan untuk pengiriman produk yang ingin dikembalikan untuk diperbaiki menjadi tanggungan Customer yang mengirim, tetapi merupakan tanggungan Kami pada saat mengirimkan kembali produk yang sudah diperbaiki kepada Customer.</li>
                  <li>Customer harus menyertakan kartu “Thanks Card” yang didapatkan ketika melakukan pembelian, kartu tersebut bertindak sebagai kartu garansi ketika mengirim kembali produk yang hendak diperbaiki atau diganti kepada Brodewijk.</li>
                </ul>
              </p>
            </div>
          </div>
        : <div className={classes.TnCTexts}>
            <p style={{marginBottom:0}}>This page is in English</p>
            <span style={{marginTop:10}} className={classes.changeLang} onClick={()=>setLang('ID')}>Ubah ke Bahasa Indonesia</span>
            <div className={classes.TnCText}>
              <h2>How to Order</h2>
              <p className={classes.TnCPar}>Every order must be done through website, order that is not carried out of our website Brodewijk.com will be considered as not valid order.</p>
            </div>
            <div className={classes.TnCText}>
              <h2>How to Measure</h2>
              <p className={classes.TnCPar}>
                Brodewijk only provides 3 ways to get the fit measurement:
                <ol>
                  <li>Online Measurement: Through online measurement which the customer measure them self by looking at the guidance video and then upload the measurement result to the website.</li>
                  <li>Template Size: Through our template size patterns that have been provided by Brodewijk.</li>
                  <li>
                    Book Appointment:  Through our “Book Appointment”service which tailor from Brodewijk will come to the customer and directly measure the customer. This service is subject to the following conditions:
                    <ul>
                      <li>This service is currently only serving in Jabodetabek area (minimum order 3 pcs) and Bandung (without minimum order)</li>
                      <li>Customer can do reschedule of the booked appointment, but can’t cancel.</li>
                      <li>Reschedule can only be done maximum 7 days before the original schedule time.</li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
            <div className={classes.TnCText}>
              <h2>Price and How to Order</h2>
              <p className={classes.TnCPar}>
                <ul>
                  <li>Price displayed is a fixed price and can’t be changed unless there is a discount or promo price</li>
                  <li>Customer is obliged to pay the full price of the product, customer can’t pay partially</li>
                  <li>Payment can be done through the payment methods that is available on our payment gateway or can be done through bank transfer.</li>
                </ul>
              </p>
            </div>
            <div className={classes.TnCText}>
              <h2> Working Process and Shipment</h2>
              <p className={classes.TnCPar}>
                <ul>
                  <li>The product ordered is guaranteed by the quality and finishing time</li>
                  <li>The working process takes maximum of 15 working days, but can be faster. We are not responsible for any late delivery due to negligence or error of the courier expedition.</li>
                  <li>If the customer wants to have the express work (2 days), additional fee will apply as much as Rp 50,000 per reduction in the number of days</li>
                  <li>The working process time is excluded from the shipment time</li>
                  <li>The shipment process will depend on the courier agent and shipping destination.</li>
                </ul>
              </p>
            </div>
            <div className={classes.TnCText}>
              <h2>Guarantee and Return</h2>
              <p className={classes.TnCPar}>
                <ul>
                  <li>The ordered and paid product can’t be cancel or refunded with any reason</li>
                  <li>If the ordered product is not appropriate, product defects, or any damages, please contact our Customer Service at SMS/WA +628156051373 or email at contact@brodewijk.com</li>
                  <li>
                    Customer can do product returns subject to the following conditions:
                    <ul>
                      <li>Product received doesn’t match with the order made by the Customer through Brodewijk website</li>
                      <li>There are product defects in the product received by the Customer</li>
                    </ul>
                    Which both conditions:
                    <ul>
                      <li>Covering fabrics type, colour, features, size</li>
                      <li>Product damages or defects are covering:</li>
                      <li>
                        Kerusakan termasuk namun tidak terbatas kepada:
                        <ul>
                          <li>Broken stitches/not neat</li>
                          <li>Broken buttons</li>
                          <li>Jammed zipper/removed/broken</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>We will change or fix the product with the same fabrics type, colours, features, and sizes with the previous order details.</li>
                  <li>The product returns because of the product defects or product received doesn’t match with the order made by the Customer is only applied 1 year (12 month since the purchase date) and can only be done once per purchase per item</li>
                  <li>The product return shipment fee from customer to Brodewijk is on customer but it’s on Brodewijk when Brodewijk send back the fixed product to the customer.</li>
                  <li>Customer has to enclose the “Thanks Card” that can be found in the packaging which act as the guarantee card when sending back the product that wants to be fixed to Brodewijk.</li>
                </ul>
              </p>
            </div>
          </div>
      }
      <Footer/>
    </div>
  );
}

export default TermsAndConditions;