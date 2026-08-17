# -*- coding: utf-8 -*-
"""Cham de mo phong theo thang 1000 diem, giong cach tinh diem cua COS Pro."""
import os
import sys


def _sao_chep(x):
    if isinstance(x, list):
        return [_sao_chep(i) for i in x]
    if isinstance(x, dict):
        return {k: _sao_chep(v) for k, v in x.items()}
    return x


def _bang(a, b):
    if isinstance(a, float) or isinstance(b, float):
        try:
            return abs(a - b) < 1e-9
        except TypeError:
            return a == b
    return a == b


def _ngan(x):
    s = repr(x)
    return s if len(s) <= 66 else s[:63] + "..."


def cham(mod, bo_cham, tieu_de):
    khong_mau = os.environ.get("NO_COLOR") or not sys.stdout.isatty()
    X, D, V, T = ("", "", "", "") if khong_mau else ("\033[92m", "\033[91m", "\033[93m", "\033[0m")

    muc = [(ma, ten, diem, tests, None) for ma, ten, diem, tests in bo_cham.CAU]
    muc += [(ma, None, diem, None, ham) for ma, diem, ham in bo_cham.DAC_BIET]
    muc.sort(key=lambda m: int(m[0][1:]))

    print(f"\n{'=' * 64}\n{tieu_de}\n{'=' * 64}")
    tong = 0
    for ma, ten, diem, tests, ham_kt in muc:
        loi = None
        if ham_kt is not None:
            try:
                ham_kt(mod)
            except Exception as e:
                loi = f"{type(e).__name__}: {e}"
        else:
            f = getattr(mod, ten, None)
            if f is None:
                loi = f"chua co ham {ten}()"
            else:
                for args, mong_doi in tests:
                    try:
                        thuc_te = f(*[_sao_chep(a) for a in args])
                    except Exception as e:
                        loi = f"{ten}{tuple(args)} -> {type(e).__name__}: {e}"
                        break
                    if not _bang(thuc_te, mong_doi):
                        loi = (f"{ten}({', '.join(_ngan(a) for a in args)})\n"
                               f"          mong doi: {_ngan(mong_doi)}\n"
                               f"          nhan duoc: {_ngan(thuc_te)}")
                        break
        if loi is None:
            tong += diem
            print(f"  {X}[+{diem:>4}]{T} {ma:<4} {ten or '(kiem tra rieng)'}")
        else:
            print(f"  {D}[+   0]{T} {ma:<4} {ten or '(kiem tra rieng)'}")
            print(f"          {V}{loi}{T}")

    dat = tong >= 600
    mau = X if dat else D
    print(f"\n  TONG DIEM: {mau}{tong}/1000{T}")
    print(f"  Nguong chung chi COS Pro (600): {X + 'DAT' + T if dat else D + 'CHUA DAT' + T}")
    print(f"{'=' * 64}\n")
    return tong


def chay(ten_mod_cham, tieu_de):
    """Goi tu cuoi file de thi: chay('_cham_de1', 'DE 1 ...')"""
    thu_muc = os.path.join(os.path.dirname(os.path.abspath(__file__)))
    if thu_muc not in sys.path:
        sys.path.insert(0, thu_muc)
    bo_cham = __import__(ten_mod_cham)
    goi = sys._getframe(1).f_globals
    class _M:
        pass
    m = _M()
    for k, v in goi.items():
        setattr(m, k, v)
    return cham(m, bo_cham, tieu_de)
